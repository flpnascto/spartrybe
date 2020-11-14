const carteiras = [
  {
    id: 'primeiraAbCd01',
    name: 'Cauteloso',
    img: './src/images/carteira_bg_a.png',
    category: ['conservador', 'medio prazo'],
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
  }

];

export default carteiras;
