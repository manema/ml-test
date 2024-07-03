import { Request } from 'express';
import { routesData, routesTitle, ItemResult } from "@constants/index";
import url from "url";
import axios from 'axios';

export const shouldWaitForData = (path : string) => typeof routesData.get(path) === 'function';

export const loadDataHandler = async (req: Request) => {
  const params = { ...req.params, ...req.query };
  
  const pathname = `${req.baseUrl}${routesData.get(req.route.path)?.(params as { [key: string]: string | number }) || ''}`;
  let dataEndpoint = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname
  });

  try {
    const response = await axios.get(decodeURIComponent(dataEndpoint));
    return response;
  } catch(err) {
  }
}

export const getPageTitle = ({ params, path}: { params: { [key: string]: string | number | ItemResult }, path: string }) => {
  return routesTitle.get(path)?.(params);
}



export const getDecimalsFromNumber = (number: number) => {
  const [integer, decimal] = number.toString().split('.').map(Number);

  return {
    integer,
    decimal
  }
}

export const isGoogleCrawler = (req: Request) : boolean => {
  const userAgent = req.headers['user-agent'];
  if (!!userAgent) {
    return (userAgent.toLowerCase().includes('googlebot'));
  }
  return false;
}
