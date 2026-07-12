export default {
  async abrirLead(lead) {
    if (!lead || !lead.id) {
      showAlert("Lead não identificado.", "error");
      return;
    }

    await storeValue("leadSelecionado", lead);

    await showModal("mdLead");

    await get_interacoes.run();
  }
};