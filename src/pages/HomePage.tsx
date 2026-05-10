import { Button } from "@/components/ui/button";
import { Rocket, BookOpen, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div className="flex items-center gap-3">
        <Rocket className="h-10 w-10 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">TensorCamp</h1>
      </div>

      <p className="text-muted-foreground text-lg text-center max-w-md">
        Nền tảng học tập trực tuyến chuyên về AI, Lập trình và Tư duy tự động hoá.
      </p>

      <div className="flex gap-4">
        <Button size="lg">
          <BookOpen className="mr-2 h-5 w-5" />
          Khám phá khoá học
        </Button>
        <Button variant="outline" size="lg">
          <Sparkles className="mr-2 h-5 w-5" />
          Tìm hiểu thêm
        </Button>
      </div>

      <p className="text-sm text-muted-foreground mt-8">
        ✅ Phase 01 Setup hoàn thành — Vite + React + TypeScript + TailwindCSS v4 + Shadcn/UI + Lucide React
      </p>
    </div>
  );
}
