import axios from "axios";
import MA from "../Models/ModelsActivity";
import id from "../Models/ModelsActivity";
import { IRepository } from "./IRepository";
import { userData } from "../helper";
import kitjakum from "../Models/kitjakum";

const user = userData()

export class ActiRepository implements IRepository <kitjakum> {
    urlPrefix = "http://localhost:1337/api/activities?populate=*"
    token = user.jwt

    async getAll(): Promise<kitjakum[] | null> {
        const resp = await fetch(`${this.urlPrefix}`);
        const data = await resp.json();
        return data.data;
    }
    async get(id: string): Promise<kitjakum[] | null>{
        const resp = await fetch(`${this.urlPrefix}&filters[id][$eq]=${id}`);
        const data = await resp.json();
        return data.data

    }
    async delete(id: string): Promise<kitjakum[] | null>{
        const resp = await fetch(`http://localhost:1337/api/activities/${id}`, {
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
