import { Aggregate } from 'mongoose'

export interface AggregateResponse<T> {
    data: T[]
    pageCount: number
    totalCount: number
}

export interface aggregateOptions {
    page?: number
    limit?: number
    sortBy?: string | object
}

export interface AggregatePaginatePlugin {
    aggregatePaginate(
        aggregateQuery: Aggregate<any[]>,
        options?: aggregateOptions,
        callback?: (err: any, results: any[], pages: number, count: number) => any
    ): Promise<AggregateResponse<any>>

    aggregatePaginate<T>(
        aggregateQuery: Aggregate<any[]>,
        options?: aggregateOptions,
        callback?: (err: any, results: T[], pages: number, count: number) => any
    ): Promise<AggregateResponse<T>>
}

export interface PaginationDefault<T> {
    docs?: T[]
    page?: number
    totalPages?: number
    totalDocs?: number
    pagingCounter?: number
    hasPrevPage?: boolean
    hasNextPage?: boolean
    prevPage?: number
    nextPage?: number
    limit?: number
}
