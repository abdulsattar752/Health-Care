// src/services/utils/pdfUtils.js
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Download HTML element as PDF
 */
export const downloadPDF = async (elementId, fileName) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID "${elementId}" not found`);
      return;
    }
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    let position = 0;
    const pageHeight = 297;
    while (position < imgHeight) {
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      position += pageHeight;
      if (position < imgHeight) pdf.addPage();
    }
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};

/**
 * Generate Health Report PDF
 */
export const generateHealthReportPDF = (reportData, fileName = 'health-report') => {
  try {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let yPosition = 20;

    pdf.setFontSize(20);
    pdf.setTextColor(0, 102, 255);
    pdf.text('Health Report', pageWidth / 2, yPosition, { align: 'center' });
    pdf.setDrawColor(0, 102, 255);
    pdf.line(20, yPosition + 5, pageWidth - 20, yPosition + 5);
    yPosition += 20;

    pdf.setFontSize(12);
    pdf.setTextColor(100);
    pdf.text(`Report Date: ${new Date().toLocaleDateString()}`, 20, yPosition);
    yPosition += 10;

    if (reportData.patient) {
      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Patient Information', 20, yPosition);
      yPosition += 8;
      pdf.setFontSize(11);
      pdf.setTextColor(50);
      Object.entries(reportData.patient).forEach(([key, value]) => {
        pdf.text(`${key}: ${value}`, 25, yPosition);
        yPosition += 6;
      });
      yPosition += 5;
    }

    if (reportData.metrics) {
      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Health Metrics', 20, yPosition);
      yPosition += 8;
      pdf.setFontSize(11);
      pdf.setTextColor(50);
      reportData.metrics.forEach(metric => {
        pdf.text(`${metric.label}: ${metric.value} ${metric.unit}`, 25, yPosition);
        yPosition += 6;
      });
      yPosition += 5;
    }

    if (reportData.riskLevel) {
      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Risk Assessment', 20, yPosition);
      yPosition += 8;
      pdf.setFontSize(11);
      pdf.setTextColor(50);
      pdf.text(`Overall Risk Level: ${reportData.riskLevel}`, 25, yPosition);
      yPosition += 6;
    }

    if (reportData.recommendations) {
      pdf.setFontSize(14);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Recommendations', 20, yPosition);
      yPosition += 8;
      pdf.setFontSize(11);
      pdf.setTextColor(50);
      const recText = typeof reportData.recommendations === 'string' ? reportData.recommendations : (reportData.recommendations || []).join('\n');
      const recommendations = pdf.splitTextToSize(recText, 170);
      pdf.text(recommendations, 25, yPosition);
    }

    pdf.setFontSize(10);
    pdf.setTextColor(150);
    pdf.text('© 2026 Health Care. Confidential.', pageWidth / 2, pageHeight - 10, { align: 'center' });
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('Error generating health report PDF:', error);
  }
};

/**
 * Generate Diet Plan PDF
 */
export const generateDietPlanPDF = (dietData, fileName = 'diet-plan') => {
  try {
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    let yPosition = 20;

    pdf.setFontSize(20);
    pdf.setTextColor(16, 185, 129);
    pdf.text('Diet Plan', pageWidth / 2, yPosition, { align: 'center' });
    pdf.setDrawColor(16, 185, 129);
    pdf.line(20, yPosition + 5, pageWidth - 20, yPosition + 5);
    yPosition += 20;

    pdf.setFontSize(11);
    pdf.setTextColor(100);
    pdf.text(`Generated: ${new Date().toLocaleDateString()}`, 20, yPosition);
    yPosition += 15;

    if (dietData.meals) {
      pdf.setFontSize(13);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Meal Plan', 20, yPosition);
      yPosition += 8;
      dietData.meals.forEach(meal => {
        pdf.setFontSize(11);
        pdf.setTextColor(50);
        pdf.text(`${meal.type}:`, 25, yPosition);
        yPosition += 6;
        const items = pdf.splitTextToSize(meal.items.join(', '), 160);
        pdf.setFontSize(10);
        pdf.text(items, 30, yPosition);
        yPosition += items.length * 4 + 4;
      });
    }
    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('Error generating diet plan PDF:', error);
  }
};
