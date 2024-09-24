import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EMISchemes = () => {
  const schemes = [
    { title: "3 Months", interest: "0%" },
    { title: "6 Months", interest: "3%" },
    { title: "12 Months", interest: "5%" },
    { title: "24 Months", interest: "7%" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-8">EMI Schemes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {schemes.map((scheme, index) => (
          <motion.div
            key={scheme.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{scheme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600">{scheme.interest} Interest</p>
                <p className="mt-2 text-gray-600">Easy monthly installments</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EMISchemes;