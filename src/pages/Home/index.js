import Card from "../../components/Card";
import "./styles.scss";

const produtos = [
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 1,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 2,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 3,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 4,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 5,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 6,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 7,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 8,
  },
  {
    imagem: "https://www.techinn.com/f/13776/137769821/sony-ps5.jpg",
    titulo: "Sony Playstation 5",
    descricao:
      "Porque eu quero muito zerar God Of War. Oloco, sute lkoe cousa joulssss",
    valor: 2777,
    id: 9,
  },
];

const Home = () => {
  return (
    <div className="page">
      <div className="container">
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <Card
                imagem={produto.imagem}
                titulo={produto.titulo}
                descricao={produto.descricao}
                valor={produto.valor}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
