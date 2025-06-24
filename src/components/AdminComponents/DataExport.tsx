import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Upload, FileText, AlertCircle } from 'lucide-react';
import { DataStorage } from '../../utils/storage';

const DataExport: React.FC = () => {
  const [importing, setImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<'success' | 'error' | null>(null);

  const handleExport = () => {
    const data = DataStorage.exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `kian-academy-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImporting(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const success = DataStorage.importData(content);
        
        setImportStatus(success ? 'success' : 'error');
        setTimeout(() => setImportStatus(null), 3000);
      } catch {
        setImportStatus('error');
        setTimeout(() => setImportStatus(null), 3000);
      } finally {
        setImporting(false);
      }
    };
    
    reader.readAsText(file);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <FileText className="h-6 w-6 ml-2 text-primary-500" />
        نسخ احتياطي واستعادة البيانات
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Export */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700">تصدير البيانات</h4>
          <p className="text-sm text-gray-600">
            قم بتحميل نسخة احتياطية من جميع بيانات النظام
          </p>
          <motion.button
            onClick={handleExport}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="h-5 w-5" />
            <span>تصدير البيانات</span>
          </motion.button>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h4 className="font-medium text-gray-700">استيراد البيانات</h4>
          <p className="text-sm text-gray-600">
            استعادة البيانات من ملف نسخة احتياطية
          </p>
          <div className="relative">
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={importing}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <motion.button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse disabled:opacity-50"
              whileHover={{ scale: importing ? 1 : 1.02 }}
              whileTap={{ scale: importing ? 1 : 0.98 }}
              disabled={importing}
            >
              <Upload className="h-5 w-5" />
              <span>{importing ? 'جاري الاستيراد...' : 'استيراد البيانات'}</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Status Messages */}
      {importStatus && (
        <motion.div
          className={`mt-4 p-4 rounded-xl flex items-center space-x-2 space-x-reverse ${
            importStatus === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertCircle className="h-5 w-5" />
          <span>
            {importStatus === 'success' 
              ? 'تم استيراد البيانات بنجاح!' 
              : 'حدث خطأ أثناء استيراد البيانات'}
          </span>
        </motion.div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
        <div className="flex items-start space-x-2 space-x-reverse">
          <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
          <div className="text-sm text-yellow-700">
            <p className="font-medium mb-1">تنبيه مهم:</p>
            <ul className="space-y-1 text-xs">
              <li>• قم بعمل نسخة احتياطية بانتظام لحماية بياناتك</li>
              <li>• استيراد البيانات سيستبدل جميع البيانات الحالية</li>
              <li>• تأكد من صحة ملف النسخة الاحتياطية قبل الاستيراد</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataExport;