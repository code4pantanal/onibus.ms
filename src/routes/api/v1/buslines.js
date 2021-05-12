import { listaLinhas } from './_database.js'

export async function get(req, res, next) {
	/* let lines = [
		{ "_id": { "$oid": "5f1329dbeef8e03e36980c27" }, "codigo": "003", "nome": "Ayde Piratinga", "pontos": [{ "nome": "R. Paissandu", "sentido": "centro", "horarios": [{ "tipo_dia": 0, "hora_saida": "02:40", "observacao": null }, { "tipo_dia": 0, "hora_saida": "03:30", "observacao": null }, { "tipo_dia": 0, "hora_saida": "05:00", "observacao": "Via Bairro Laranja Doce" }, { "tipo_dia": 0, "hora_saida": "06:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "07:15", "observacao": null }, { "tipo_dia": 0, "hora_saida": "08:20", "observacao": null }, { "tipo_dia": 0, "hora_saida": "11:20", "observacao": null }, { "tipo_dia": 0, "hora_saida": "12:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "13:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "14:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "15:30", "observacao": null }, { "tipo_dia": 0, "hora_saida": "17:15", "observacao": null }, { "tipo_dia": 0, "hora_saida": "20:15", "observacao": null }, { "tipo_dia": 1, "hora_saida": "02:40", "observacao": null }, { "tipo_dia": 1, "hora_saida": "03:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "06:00", "observacao": null }, { "tipo_dia": 1, "hora_saida": "07:20", "observacao": null }, { "tipo_dia": 1, "hora_saida": "08:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "12:40", "observacao": null }, { "tipo_dia": 1, "hora_saida": "14:00", "observacao": null }, { "tipo_dia": 1, "hora_saida": "16:00", "observacao": null }, { "tipo_dia": 1, "hora_saida": "18:15", "observacao": null }, { "tipo_dia": 2, "hora_saida": "20:00", "observacao": "Via Bairro Santa Maria" }], "lat": null, "lon": null, "ordem": 0 }, { "nome": "R. Eudoxia Luiz", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": 1 }, { "nome": "R. Paranhos", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": 2 }, { "nome": "R. Dom João VI", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "3" } }, { "nome": "R. Monte Alegre", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "4" } }, { "nome": "R. Rangel Torres", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "5" } }, { "nome": "R. Clovis Cersozimo", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "6" } }, { "nome": "R. Iguaçu", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "7" } }, { "nome": "R. Toshinobu Katayama", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "8" } }, { "nome": "Av. Marcelino Pires", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "9" } }, { "nome": "R. Dr. Camilo Hermelindo", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "10" } }, { "nome": "Terminal", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "11" } }, { "nome": "Terminal", "sentido": "bairro", "horarios": [{ "tipo_dia": 0, "hora_saida": "01:20", "observacao": null }, { "tipo_dia": 0, "hora_saida": "03:10", "observacao": null }, { "tipo_dia": 0, "hora_saida": "05:30", "observacao": "Via Bairro Laranja Doce" }, { "tipo_dia": 0, "hora_saida": "06:45", "observacao": null }, { "tipo_dia": 0, "hora_saida": "07:50", "observacao": null }, { "tipo_dia": 0, "hora_saida": "10:50", "observacao": null }, { "tipo_dia": 0, "hora_saida": "11:30", "observacao": "Via Bairro Laranja Doce" }, { "tipo_dia": 0, "hora_saida": "12:30", "observacao": null }, { "tipo_dia": 0, "hora_saida": "13:30", "observacao": null }, { "tipo_dia": 0, "hora_saida": "15:05", "observacao": null }, { "tipo_dia": 0, "hora_saida": "16:45", "observacao": "Via Bairro Laranja Doce" }, { "tipo_dia": 0, "hora_saida": "18:30", "observacao": null }, { "tipo_dia": 0, "hora_saida": "19:45", "observacao": null }, { "tipo_dia": 0, "hora_saida": "22:30", "observacao": null }, { "tipo_dia": 0, "hora_saida": "23:25", "observacao": null }, { "tipo_dia": 1, "hora_saida": "01:20", "observacao": null }, { "tipo_dia": 1, "hora_saida": "03:10", "observacao": null }, { "tipo_dia": 1, "hora_saida": "05:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "06:50", "observacao": null }, { "tipo_dia": 1, "hora_saida": "08:00", "observacao": null }, { "tipo_dia": 1, "hora_saida": "12:10", "observacao": null }, { "tipo_dia": 1, "hora_saida": "13:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "15:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "17:45", "observacao": null }, { "tipo_dia": 1, "hora_saida": "19:30", "observacao": null }, { "tipo_dia": 2, "hora_saida": "19:30", "observacao": "Via Bairro Santa Maria" }], "lat": null, "lon": null, "ordem": 0 }, { "nome": "R. Antônio Emílio de Figueiredo", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": 1 }, { "nome": "R. Dr Camilo Ermelindo da Silva", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": 2 }, { "nome": "Av. Marcelino Pires", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "3" } }, { "nome": "R. Hayel Bom Facker", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "4" } }, { "nome": "R. Monte Alegre", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "5" } }, { "nome": "R. Toshinobu Katayama", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "6" } }, { "nome": "R. Iguassu", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "7" } }, { "nome": "R. Clóvis Cersozimo de Souza", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "8" } }, { "nome": "R. dos Caiuas", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "9" } }, { "nome": "R. Manoel Santiago", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "10" } }, { "nome": "R. Cel. Ponciano", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "11" } }, { "nome": "R. Antônio A de Mattos", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "12" } }, { "nome": "R. Dom João VI", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "13" } }, { "nome": "R. Paranhos", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "14" } }], "shape": [] },
		{ "_id": { "$oid": "5f132c2358d7b018af5579eb" }, "codigo": "005", "nome": "4º Plano", "pontos": [{ "nome": "R. Abdias Frazão Nascimento", "sentido": "centro", "horarios": [{ "tipo_dia": 0, "hora_saida": "04:20", "observacao": null }, { "tipo_dia": 0, "hora_saida": "05:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "06:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "07:15", "observacao": null }, { "tipo_dia": 0, "hora_saida": "11:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "12:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "13:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "15:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "17:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "19:00", "observacao": null }, { "tipo_dia": 0, "hora_saida": "20:20", "observacao": null }, { "tipo_dia": 0, "hora_saida": "21:20", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }, { "tipo_dia": 1, "hora_saida": "04:20", "observacao": null }, { "tipo_dia": 1, "hora_saida": "06:00", "observacao": null }, { "tipo_dia": 1, "hora_saida": "07:15", "observacao": null }, { "tipo_dia": 1, "hora_saida": "08:25", "observacao": null }, { "tipo_dia": 1, "hora_saida": "10:55", "observacao": null }, { "tipo_dia": 1, "hora_saida": "12:55", "observacao": null }, { "tipo_dia": 1, "hora_saida": "15:55", "observacao": null }, { "tipo_dia": 1, "hora_saida": "16:55", "observacao": null }, { "tipo_dia": 1, "hora_saida": "18:10", "observacao": null }, { "tipo_dia": 2, "hora_saida": "20:30", "observacao": null }, { "tipo_dia": 2, "hora_saida": "20:50", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }], "lat": null, "lon": null, "ordem": 0 }, { "nome": "R. Iracema", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": 1 }, { "nome": "R. Leonidas Além", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": 2 }, { "nome": "Campo Dourado", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "3" } }, { "nome": "R. Leonidas Além", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "4" } }, { "nome": "R. Manoel Rasselem", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "5" } }, { "nome": "R. Hayel Bon Faker", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "6" } }, { "nome": "R. Antonio Emilio de Figueredo", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "7" } }, { "nome": "Av. Presidente Vargas", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "8" } }, { "nome": "Av. Marcelino Pires", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "9" } }, { "nome": "R. Drº Camilo Hermelindo da Silva", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "10" } }, { "nome": "Terminal", "sentido": "centro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "11" } }, { "nome": "Terminal", "sentido": "bairro", "horarios": [{ "tipo_dia": 0, "hora_saida": "05:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "06:50", "observacao": null }, { "tipo_dia": 0, "hora_saida": "10:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "11:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "12:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "14:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "16:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "18:35", "observacao": null }, { "tipo_dia": 0, "hora_saida": "19:55", "observacao": null }, { "tipo_dia": 0, "hora_saida": "20:55", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }, { "tipo_dia": 0, "hora_saida": "22:30", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }, { "tipo_dia": 0, "hora_saida": "23:25", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }, { "tipo_dia": 1, "hora_saida": "05:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "06:50", "observacao": null }, { "tipo_dia": 1, "hora_saida": "08:00", "observacao": null }, { "tipo_dia": 1, "hora_saida": "10:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "12:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "15:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "16:30", "observacao": null }, { "tipo_dia": 1, "hora_saida": "17:45", "observacao": null }, { "tipo_dia": 1, "hora_saida": "19:30", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }, { "tipo_dia": 2, "hora_saida": "20:10", "observacao": null }, { "tipo_dia": 2, "hora_saida": "20:20", "observacao": "Volta Realizada pela Linha L 07 – Cachoeirinha" }], "lat": null, "lon": null, "ordem": 0 }, { "nome": "R. Hilda Bergo Duarte", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": 1 }, { "nome": "R. Antonio Emilio de Figueredo", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": 2 }, { "nome": "R. Hayel Bon Faker", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "3" } }, { "nome": "R. Jose Luiz da Silva", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "4" } }, { "nome": "R. Leonidas Além", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "5" } }, { "nome": "R. Manoel Rasselen", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "6" } }, { "nome": "R. Abdias Frazão Nascimento", "sentido": "bairro", "horarios": [], "lat": null, "lon": null, "ordem": { "$numberInt": "7" } }], "shape": [] }
	] */
	const lines = await listaLinhas();
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(lines));

}