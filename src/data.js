const carteiras = [
  {
    id: 'primeiraAbCd01',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd02',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd03',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd04',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd05',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd06',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd07',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd08',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd09',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd010',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd020',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd030',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd011',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd021',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd031',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd012',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd022',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd032',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd013',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd023',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd033',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd014',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd024',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd034',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd015',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd025',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd035',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd016',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd026',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd036',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd017',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd027',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd037',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd018',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd028',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd038',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd019',
    name: 'Cauteloso',
    img: 'images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo', 'multimercado'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd029',
    name: 'Kamikasi',
    img: 'images/carteira_bg_a.png',
    category: ['moderado', 'medio prazo'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
  {
    id: 'primeiraAbCd039',
    name: 'Espartano',
    img: 'images/carteira_bg_a.png',
    category: ['agressivo', 'longo prazo', 'renda fixa'],
    author: 'Órama',
    rating: {
      rate: 4.3,
      people: 273,
    },
    ranking: {
      position: 1,
      profitability: {
        oneMonth: 2.1,
        oneYear: 18.3,
        twoYear: 30.7,
        ytd: 15.2,
      },
    },

    // O portifólio é composto pelo key 'id' do JSON
    // https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full
    portfolio: [1013, 114, 883],
    
    // o peso é a porcentagem de cada item do portifólio na carteira
    weight: [40, 30, 30],
  },
];

export default carteiras;
