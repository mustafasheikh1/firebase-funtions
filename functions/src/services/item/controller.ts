import { Request, Response } from "express";
import { database as db } from '../..';
import { collections } from '../../config';
import { handleError } from "../../shared/utils";

/**
 * // TODO: Pagination Pending
 * @description To Get All Items
 * @param req 
 * @param res 
 * @returns 
 */
export async function getAllItems(req: Request, res: Response) {
	try {
		const data :any = (await db.collection(collections.items).get()).docs.map(x => x.data());

		return res.status(200).send(data);
	} catch (err) {
		return handleError(res, err)
	}
}
