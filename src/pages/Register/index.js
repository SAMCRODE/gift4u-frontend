import ButtonSucess from "../../components/Button/Sucess";
import "./styles.scss";
const Register = () => {
  const loadFile = (event) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="page-register">
      <div className="form-card">
        <h1>Cadastre o seu presente</h1>
        <form>
          <div>
            <label>Nome do produto</label>
            <input type="text" />
            <label>Descrição</label>
            <textarea type="text" />
            <label> Valor</label>
            <input id="valor" type="text" />
            <label>Chave PIX</label>
            <input type="text" />

            <ButtonSucess
              className="button-success"
              texto="Cadastrar e tentar a sorte =)"
            />
          </div>
          <div>
            <label>Imagem do produto</label>
            <img id="output" />

            <div className="button-upload">
              Escolher imagem
              <input
                type="file"
                className="upload"
                onChange={(event) => loadFile(event)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
