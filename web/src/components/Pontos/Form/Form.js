import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Form.css';
import useApi from 'components/utils/useApi';
import axios from 'axios';

const initialValue = {
  title: '',
  url: '',
  imageUrl: '',
  UF : '',
  description : '',
  references : '',
}

const PontosForm = ({ id }) => {
  const [values, setValues] = useState(id ? null: initialValue);
  const history = useHistory();
  const [load] = useApi({
    url: `/ponto/${id}`,
    method: 'get',
    onCompleted: (response) => {
      setValues(response.data);
    }
  });

  const [save, saveInfo] = useApi({
    url: id ? `/ponto/${id}` : '/ponto',
    method: id ? 'put' : 'post',
    onCompleted: (response) => {
      if (!response.error) {
        history.push('/');
      }
    }
  })

  useEffect(() => {
    if (id) {
      load();
    }
  }, [id]);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    save({
      data: values,
    });
  }

  return (
    <div>
      <h1>PONTOS TURISTICOS</h1>
      <h2>Novo Ponto </h2>

      <form onSubmit={onSubmit}>


        <div className="pontos-form__group">
          <label htmlFor="title">Nome</label>
          <input id="title" name="title" type="text" required onChange={onChange} />
        </div>

        <div className="pontos-form__group">
          <label htmlFor="url">Link</label>
          <input id="url" name="url" type="text" required onChange={onChange} />
        </div>


        <div className="pontos-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input id="imageUrl" name="imageUrl" type="text" required onChange={onChange} />
        </div>

        <div className="pontos-form__group">
          <label for="UF">UF</label>
          <select id="UF" name="UF" required onChange={onChange}>
					<option value="" disabled selected>--</option>
					<option value="AC">AC</option>
					<option value="AL">AL</option>
					<option value="AP">AP</option>
					<option value="AM">AM</option>
					<option value="BA">BA</option>
					<option value="CE">CE</option>
					<option value="DF">DF</option>
					<option value="ES">ES</option>
					<option value="GO">GO</option>
					<option value="MA">MA</option>
					<option value="MT">MT</option>
					<option value="MS">MS</option>
					<option value="MG">MG</option>
					<option value="PA">PA</option>
					<option value="PB">PB</option>
					<option value="PR">PR</option>
					<option value="PE">PE</option>
					<option value="PI">PI</option>
					<option value="RJ">RJ</option>
					<option value="RN">RN</option>
					<option value="RS">RS</option>
					<option value="RO">RO</option>
					<option value="RR">RR</option>
					<option value="SC">SC</option>
					<option value="SP">SP</option>
					<option value="SE">SE</option>
					<option value="TO">TO</option>
				</select>
        </div>


        <div className="pontos-form__group">
        <label htmlFor="locale">Cidade</label>
        <input id="locale" name="locale" type="text" required onChange={onChange} />
        </div>


        <div className="pontos-form__group">
          <label htmlFor="references">Referencia</label>
          <input id="references" name="references" type="text" required onChange={onChange} />
        </div>


        <div className="pontos-form__group">
          <label htmlFor="description">Descrição</label>
          <textarea id="description" rows="7"  maxlength="300" name="description" type="text" required onChange={onChange} />
        </div>
        <div>


          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
};

export default PontosForm;
