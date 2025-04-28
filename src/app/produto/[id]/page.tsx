import ProductDetail from '../../components/ProductDetail'

// Simulação de dados do produto
const product = {
  id: 1,
  name: 'Urso Aviador',
  price: 370.00,
  image: '/images/produto1.jpg',
  category: 'Ursos',
  description: 'Urso artesanal vestido de aviador, perfeito para decoração e colecionadores. Feito à mão com materiais de alta qualidade e muito carinho.',
  features: [
    'Feito à mão com materiais selecionados',
    'Altura aproximada: 30cm',
    'Peso: 500g',
    'Material: Pelúcia premium',
    'Lavável a mão'
  ],
  specifications: {
    'Material': 'Pelúcia premium',
    'Altura': '30cm',
    'Peso': '500g',
    'Lavagem': 'Lavar à mão',
    'Garantia': '30 dias',
    'Origem': 'Brasil'
  }
}

// Função para gerar os parâmetros estáticos
export async function generateStaticParams() {
  // Por enquanto, retornamos apenas um ID
  // Em produção, isso viria de uma API ou banco de dados
  return [
    { id: '1' }
  ]
}

export default function ProductPage() {
  return <ProductDetail product={product} />
}