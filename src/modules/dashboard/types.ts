export interface SpendMoney {
  spent_money:null | string | number
}
export namespace IEntity {
  export interface Student {
    id: number;
    fullName: string;
    degree: string;
    tuitionFee: number;
    phone: string;
    createdAt: string;
    university: string;
  }
  export interface Sponsors {
    id: number;
    fullName: string;
    amount: number;
    spend_money: SpendMoney[];
    phone: string;
    createdAt: string;
    status: string;
  }
}

export namespace IForm {}

export namespace IApi {
  export namespace Students {
    export interface Request {
      page: number;
      limit: number;
    }
    export interface Response {
      count: number;
      next: number | null;
      previous: number | null;
      totalPages: number;
      results: IEntity.Student[];
    }
  }
  export namespace Sponsors {
    export interface Request {
      page: number;
      limit: number;
    }
    export interface Response {
      count: number;
      next: string | null;
      previous: number | null;
   
      results: IEntity.Sponsors[];
    }
  }
}

export namespace IQuery {
  export interface Students {
    students: IEntity.Student[];
    count: number;
    isLoading: boolean;
  }
  export interface Sponsors {
    sponsors: IEntity.Sponsors[];
    count: number;
    isLoading: boolean;
  }
}
