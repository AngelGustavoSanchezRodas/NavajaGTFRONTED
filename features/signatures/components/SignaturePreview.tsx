import React, { forwardRef } from 'react';

export interface SignatureData {
  nombre: string;
  cargo: string;
  empresa: string;
  email: string;
  telefono: string;
  sitioWeb: string;
  photoUrl: string;
  linkedin: string;
  twitter: string;
}

interface SignaturePreviewProps {
  data: SignatureData;
  plan: 'FREE' | 'PRO';
  templateId: string;
}

export const SignaturePreview = forwardRef<HTMLDivElement, SignaturePreviewProps>(
  ({ data, plan, templateId }, ref) => {
    // Definimos colores basados en la paleta de NavajaGT para la plantilla por defecto
    const primaryColor = '#0F172A'; // slate-900
    const accentColor = '#2DD4BF';  // brand-turquoise
    const textColor = '#64748B';    // slate-500

    return (
      <div ref={ref} style={{ backgroundColor: '#ffffff', padding: '20px' }}>
        {/* Usamos tablas estrcitas para compatibilidad con Outlook */}
        <table cellPadding={0} cellSpacing={0} border={0} style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: primaryColor, width: '100%', maxWidth: '500px' }}>
          <tbody>
            <tr>
              {data.photoUrl && (
                <td style={{ paddingRight: '20px', verticalAlign: 'top', width: '100px' }}>
                  <img
                    src={data.photoUrl}
                    alt={data.nombre}
                    width={100}
                    height={100}
                    style={{ borderRadius: '50%', objectFit: 'cover', width: '100px', height: '100px', display: 'block', border: `3px solid ${accentColor}` }}
                  />
                </td>
              )}
              <td style={{ verticalAlign: 'top' }}>
                <table cellPadding={0} cellSpacing={0} border={0}>
                  <tbody>
                    <tr>
                      <td style={{ fontSize: '18px', fontWeight: 'bold', color: primaryColor, paddingBottom: '4px' }}>
                        {data.nombre || 'Tu Nombre'}
                      </td>
                    </tr>
                    {(data.cargo || data.empresa) && (
                      <tr>
                        <td style={{ fontSize: '14px', color: textColor, paddingBottom: '12px' }}>
                          <span style={{ fontWeight: 'bold' }}>{data.cargo || 'Tu Cargo'}</span>
                          {data.cargo && data.empresa && ' | '}
                          <span>{data.empresa || 'Tu Empresa'}</span>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td style={{ borderBottom: `2px solid ${accentColor}`, paddingBottom: '12px' }}></td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: '12px' }}>
                        <table cellPadding={0} cellSpacing={0} border={0} style={{ fontSize: '12px', color: textColor }}>
                          <tbody>
                            {data.telefono && (
                              <tr>
                                <td style={{ paddingBottom: '4px' }}>
                                  <span style={{ color: accentColor, fontWeight: 'bold', marginRight: '6px' }}>T</span> 
                                  <a href={`tel:${data.telefono}`} style={{ color: textColor, textDecoration: 'none' }}>{data.telefono}</a>
                                </td>
                              </tr>
                            )}
                            {data.email && (
                              <tr>
                                <td style={{ paddingBottom: '4px' }}>
                                  <span style={{ color: accentColor, fontWeight: 'bold', marginRight: '6px' }}>E</span> 
                                  <a href={`mailto:${data.email}`} style={{ color: textColor, textDecoration: 'none' }}>{data.email}</a>
                                </td>
                              </tr>
                            )}
                            {data.sitioWeb && (
                              <tr>
                                <td style={{ paddingBottom: '4px' }}>
                                  <span style={{ color: accentColor, fontWeight: 'bold', marginRight: '6px' }}>W</span> 
                                  <a href={data.sitioWeb} target="_blank" rel="noopener noreferrer" style={{ color: textColor, textDecoration: 'none' }}>{data.sitioWeb.replace(/^https?:\/\//, '')}</a>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    
                    {/* Social Links */}
                    {(data.linkedin || data.twitter) && (
                      <tr>
                        <td style={{ paddingTop: '12px' }}>
                          <table cellPadding={0} cellSpacing={0} border={0}>
                            <tbody>
                              <tr>
                                {data.linkedin && (
                                  <td style={{ paddingRight: '8px' }}>
                                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
                                      LinkedIn
                                    </a>
                                  </td>
                                )}
                                {data.twitter && (
                                  <td>
                                    <a href={data.twitter} target="_blank" rel="noopener noreferrer" style={{ color: primaryColor, textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>
                                      Twitter
                                    </a>
                                  </td>
                                )}
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}

                    {/* Inyección Viral PLG para usuarios FREE */}
                    {plan === 'FREE' && (
                      <tr>
                        <td style={{ paddingTop: '16px', fontSize: '10px', color: '#999999', fontFamily: 'Arial, sans-serif' }}>
                          Generado gratis con <a href="https://navaja.gt" style={{ color: accentColor, textDecoration: 'none', fontWeight: 'bold' }}>NavajaGT</a>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
);

SignaturePreview.displayName = 'SignaturePreview';
