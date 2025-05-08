
import GreenButton from '@/components/GreenButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Зеленая кнопка</h1>
      
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-xl font-medium">Стандартные кнопки</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <GreenButton size="sm">Маленькая</GreenButton>
            <GreenButton>Средняя</GreenButton>
            <GreenButton size="lg">Большая</GreenButton>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-xl font-medium">Кнопки с контуром</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <GreenButton variant="outline" size="sm">Маленькая</GreenButton>
            <GreenButton variant="outline">Средняя</GreenButton>
            <GreenButton variant="outline" size="lg">Большая</GreenButton>
          </div>
        </div>
        
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-xl font-medium">Состояние disabled</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <GreenButton disabled>Неактивная кнопка</GreenButton>
            <GreenButton variant="outline" disabled>Неактивная с контуром</GreenButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
