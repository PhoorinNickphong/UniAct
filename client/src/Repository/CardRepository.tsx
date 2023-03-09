
import { IRepository } from "./IRepository";
import { userData } from "../helper";
import kitjakum from "../Models/kitjakum";
import conf from '../conf'

const user = userData()

export class ActiRepository implements IRepository<kitjakum> {
    urlPrefix = `${conf.apiPrefix}/api/activities?populate=*`
    token = user.jwt

    async getAll(): Promise<kitjakum[] | null> {
        const resp = await fetch(`${this.urlPrefix}`);
        const data = await resp.json();
        return data.data;
    }
    async get(id: string): Promise<kitjakum[] | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
        const data = await resp.json();
        return data.data

    }
    async getById(id: string): Promise<kitjakum | null> {
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
        const data = await resp.json();
        return data.data[0] || null;
    }

    async delete(id: string): Promise<kitjakum[] | null> {
        const resp = await fetch(`${conf.apiPrefix}/api/activities/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        });
        const data = await resp.json();
        return data.data
    }
}
