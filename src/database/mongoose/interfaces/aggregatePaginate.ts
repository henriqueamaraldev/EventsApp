import mongoose from "mongoose";

export const aggregatePaginate = async<T>(collection: mongoose.Model<T, {}, {}, {}, any>, paginateOptions: PaginationOptions) => {

    let totalItems: number = await collection.count()

    let totalPages: number = Math.ceil(totalItems / paginateOptions.limit)

    if (paginateOptions.page > totalPages) {
        paginateOptions.page = totalPages
    }

    const aggregation: any[] = []

    aggregation.push({
        $skip: paginateOptions.limit * (paginateOptions.page - 1)
    })

    aggregation.push({
        $limit: paginateOptions.limit
    })

    paginateOptions.sort ? aggregation.push({
        $sort: {
            ...paginateOptions.sort
        }
    }) : ''

    let data = await collection.aggregate<T>(aggregation)

    let response = new PaginationResponse<T>(paginateOptions.page, totalPages, data)

    return response
}

export class PaginationOptions {
    page: number;
    limit: number;
    sort?: object;

    constructor(page: number, limit: number, sort?: object) {

        this.page = page

        this.limit = limit

        if (sort) {

            this.sort = sort
        }
    }
}

class PaginationResponse<T> {
    constructor(private page: number, private totalPages: number, private data: T[]) {
    }
}