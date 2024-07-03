import express, { Request, Response } from 'express';
import axios from 'axios';
import { getDecimalsFromNumber } from '@utils/index';
import { ItemType } from '@constants/index';

const router = express.Router();

router.get('/items/:id', async (req: Request, res: Response) => {
  try {
    const idParam = req.params?.id || null;
    const apiUrls = [`https://api.mercadolibre.com/items/${idParam}`, `https://api.mercadolibre.com/items/${idParam}/description`];

    const requests = apiUrls.map((url) => axios.get(url));
    const responses = await Promise.all(requests);


    const { id, title, currency_id, price, pictures, condition, shipping, sold_quantity } = responses[0]?.data;
    const { plain_text } = responses[1]?.data;
    const { integer, decimal } = getDecimalsFromNumber(price);
    let result = {
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount: integer,
          decimals: decimal
        },
        picture: pictures[0]?.url,
        condition,
        free_shipping: shipping?.free_shipping,
        description: plain_text,
        sold_quantity
      }
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'failed to fetch data'});
  }
})

router.get('/items', async (req: Request, res: Response) => {
  try {
    const searchParam = req.query?.q || null;
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${searchParam}&limit=4`;

    const response = await axios.get(apiUrl);

    let result: ItemType[] = [];

      if (response?.data?.results) {
        let formatedResult = response?.data?.results.map(({
          id,
          title,
          currency_id,
          price,
          thumbnail,
          condition,
          shipping,
          seller_address
        } : any) => {
            const { integer, decimal } = getDecimalsFromNumber(price);
            return ({
              id,
              title,
              price: {
                currency: currency_id,
                amount: integer,
                decimals: decimal
              },
              neighborhood: seller_address?.city?.name,
              picture: thumbnail,
              condition,
              free_shipping: shipping?.free_shipping
            }
          ) 
        }
        )
        result.push(...formatedResult);
      }

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'failed to fetch data'});
  }
})

export default router;
