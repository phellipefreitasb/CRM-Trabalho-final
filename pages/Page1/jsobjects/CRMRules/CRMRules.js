export default {
  isAltoValor(lead) {
    return Number(lead?.valor_estimado || 0) > 50000;
  },

  isNovoAntigo(lead) {
    if (!lead?.data_criacao || lead?.status !== "Novo") {
      return false;
    }

    const dataCriacao = new Date(lead.data_criacao);
    const hoje = new Date();

    const diffDias = (hoje - dataCriacao) / (1000 * 60 * 60 * 24);

    return diffDias > 3;
  },

  getAlertaLead(lead) {
    if (this.isAltoValor(lead)) {
      return "Alto valor";
    }

    if (this.isNovoAntigo(lead)) {
      return "Novo há mais de 3 dias";
    }

    return "Normal";
  },

  getCorAlerta(lead) {
    if (this.isAltoValor(lead)) {
      return "#DCFCE7";
    }

    if (this.isNovoAntigo(lead)) {
      return "#FEE2E2";
    }

    return "#FFFFFF";
  }
};