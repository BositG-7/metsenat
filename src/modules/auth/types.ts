export namespace IEntity {
  export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
  }

  export interface Tokens {
    access: string;
    refresh: string;
  }
}

export namespace IForm {
  export interface Login {
    username: string;
    password: string;
  }
  export interface Register {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  }
}

export namespace IQuery {
  export interface Profile {
    user: IEntity.User;
  }
}

export namespace IApi {
  export namespace Login {
    export interface Request extends IForm.Login {}
    export interface Response {
      tokens: IEntity.Tokens;
      user: IEntity.User;
    }
  }

  export namespace Register {
    export interface Request extends IForm.Register {}
    export interface Response extends IEntity.User {}
  }

  export namespace Profile {
    export interface Request {}
    export interface Response extends IEntity.User {}
  }

  export namespace Refresh {
    export interface Request extends IEntity.Tokens {}
    export interface Response extends Pick<IEntity.Tokens, "access"> {}
  }
}

export namespace IContext {
  export interface Auth {
    user: IEntity.User | null;
    isLoading: boolean;
    methods: {
      login: (user: IEntity.User) => void;
      logout: () => void;
    };
  }
}
