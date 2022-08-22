import {IProductDB, ITagsDB, ITagsProductsDB} from "../../models/Products";
import { IUserDB, USER_ROLES } from "../../models/User";

export const users: IUserDB[] = [
  {
      id: "101",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      password: "$2a$12$RBAWOHpUvGTE.MEeIohAzec9tlVqtNA/x2PMPt/Hrt0vI437cQdJC", // bananinha
      role: USER_ROLES.ADMIN
  },
  {
      id: "102",
      name: "Fulano",
      email: "fulano@gmail.com",
      password: "$2a$12$PULtVNlAll87D6E8pR/0HO9vbzVDPaUMA89rc5cNmYoAAepbwmkcO", // qwerty00
      role: USER_ROLES.NORMAL
  },
  {
      id: "103",
      name: "Ciclana",
      email: "ciclana@gmail.com",
      password: "$2a$12$LkWMqS3oPhP2iVMcZOVvWer9ahUPulxjB0EA4TWPxWaRuEEfYGu/i", // asdfg123
      role: USER_ROLES.NORMAL
  }
]

export const products:IProductDB[] = 
 [
      {
        id: 8371,
        name: "VESTIDO TRICOT CHEVRON"
      },
      {
        id: 8367,
        name: "VESTIDO MOLETOM COM CAPUZ MESCLA"
      },
      {
        id: 8363,
        name: "VESTIDO CURTO MANGA LONGA LUREX"
      },
      {
        id: 8360,
        name: "VESTIDO FEMININO CANELADO"
      }
    ]

export const tags:ITagsDB[] = [
  {
    id: 101,
    name:'balada'
  },
  {
    id: 102,
    name:'neutro'
  },
  {
    id: 103,
    name:'delicado'
  },  
  {
    id: 104,
    name:'festa'
  },
  {
    id: 105,
    name:'casual'
  },
  {
    id: 106,
    name:'metal'
  },
  {
    id: 107,
    name:'colorido'
  },
  {
    id: 108,
    name:'estampas'
  },
  {
    id: 109,
    name:'passeio'
  },
  {
    id: 110,
    name:'workwear'
  },
  {
    id: 111,
    name:'viagem'
  },
  {
    id: 112,
    name:'descolado'
  }
]

export const tagsProduct:ITagsProductsDB[] = [
  {
    id: 1,
    product_id: 8371,
    tag_id: 101
  },
  {
    id: 2,
    product_id:8371,
    tag_id: 102
  },
  {
    id: 3,
    product_id:8371,
    tag_id: 103
  },
  {
    id: 4,
    product_id:8371,
    tag_id: 104
  },
  {
    id: 5,
    product_id:8367,
    tag_id: 105
  },
  {
    id: 6,
    product_id:8367,
    tag_id: 106
  }
]
  