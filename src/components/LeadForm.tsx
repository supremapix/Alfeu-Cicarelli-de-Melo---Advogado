import React, { useState } from 'react';
import { Button } from './ui/button';

export function LeadForm({ bairro }: { bairro?: string }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    plano: '',
    problema: '',
    mensagem: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const problemas = [
    'Negativa de Cirurgia',
    'Medicamento de Alto Custo',
    'Home Care / Internação',
    'Reajuste Abusivo',
    'Tratamento ABA / Autismo',
    'Erro Médico',
    'Outro'
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    // Format (99) 99999-9999
    let formatted = value;
    if (value.length > 2) {
      formatted = `(${value.slice(0, 2)}) `;
      if (value.length > 7) {
        formatted += `${value.slice(2, 7)}-${value.slice(7)}`;
      } else {
        formatted += value.slice(2);
      }
    }
    
    setFormData({ ...formData, telefone: formatted });
    if (errors.telefone) setErrors({ ...errors, telefone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (formData.telefone.replace(/\D/g, '').length < 10) newErrors.telefone = 'Telefone inválido';
    if (!formData.problema) newErrors.problema = 'Selecione um problema';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const texto = `Olá, vim pelo site Cicarelli SP.
Nome: ${formData.nome}
${bairro ? `Bairro: ${bairro}\n` : ''}Telefone: ${formData.telefone}
Plano: ${formData.plano || 'Não informado'}
Problema: ${formData.problema}
Mensagem: ${formData.mensagem}`;

    const url = `https://wa.me/5541999580015?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-white mb-1">Nome Completo *</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          placeholder="Seu nome"
        />
        {errors.nome && <p className="text-gold text-xs mt-1">{errors.nome}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-white mb-1">Telefone / WhatsApp *</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handlePhoneChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder="(41) 99999-9999"
          />
          {errors.telefone && <p className="text-gold text-xs mt-1">{errors.telefone}</p>}
        </div>

        <div>
          <label htmlFor="plano" className="block text-sm font-medium text-white mb-1">Qual o Plano de Saúde?</label>
          <input
            type="text"
            id="plano"
            name="plano"
            value={formData.plano}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
            placeholder="Ex: Amil, Bradesco, SulAmérica"
          />
        </div>
      </div>

      <div>
        <label htmlFor="problema" className="block text-sm font-medium text-white mb-1">Tipo de Problema *</label>
        <select
          id="problema"
          name="problema"
          value={formData.problema}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
        >
          <option value="" disabled className="text-gray-900">Selecione uma opção...</option>
          {problemas.map(p => (
            <option key={p} value={p} className="text-gray-900">{p}</option>
          ))}
        </select>
        {errors.problema && <p className="text-gold text-xs mt-1">{errors.problema}</p>}
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-white mb-1">Mensagem (opcional)</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gold/30 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
          placeholder="Descreva brevemente o seu caso..."
        />
      </div>

      <Button type="submit" className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
        <i className="ri-whatsapp-line mr-2 text-2xl"></i>
        Enviar pelo WhatsApp
      </Button>
      <p className="text-center text-xs text-gray-400 mt-3">Rápido, seguro e 100% gratuito.</p>
    </form>
  );
}
