export interface ICurrentExpense {
    ID: number,
    Total: number,
    Name: string,
    Summary: string,
    Budget: ICurrentBudget
}

export interface ICurrentBudget {
    ID?: number, 
    Total?: number,
    UserInput: number,
    Name?: string
}
