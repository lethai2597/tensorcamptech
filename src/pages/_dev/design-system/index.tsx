import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Toggle } from "@/components/ui/toggle";
import {
  Type, MousePointerClick, FormInput, LayoutGrid, Layers, Navigation,
  Loader2, Mail, Plus, User, Palette, CheckCircle2, Paintbrush, Info,
  Bold, Italic, Underline, SlidersHorizontal, ChevronDown, ToggleLeft,
} from "lucide-react";

function SI({ icon: Icon }: { icon: React.ElementType }) {
  return <div className="flex items-center justify-center size-9 rounded-xl bg-muted"><Icon className="size-4 text-foreground/70" /></div>;
}

export default function DesignSystemPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(60);
  const [sliderVal, setSliderVal] = useState([33]);

  return (
    <div className="bg-gradient-page">
      <div className="container mx-auto py-12 px-4 md:px-8 max-w-[1600px]">
        <div className="mb-10 flex items-center gap-3">
          <div className="flex items-center justify-center size-11 rounded-2xl bg-primary text-primary-foreground"><Palette className="size-5" /></div>
          <div><h1 className="text-3xl font-bold tracking-tight">Design System</h1><p className="text-sm text-muted-foreground">TensorCamp — Component Library</p></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">

          {/* Colors */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={Paintbrush} /><div><CardTitle>Colors</CardTitle><CardDescription>Bảng màu hệ thống</CardDescription></div></div></CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2">
                {[{n:"Primary",c:"bg-primary"},{n:"Secondary",c:"bg-secondary"},{n:"Accent",c:"bg-accent"},{n:"Muted",c:"bg-muted"},{n:"Destructive",c:"bg-destructive"},{n:"Success",c:"bg-[var(--accent-green)]"},{n:"Background",c:"bg-background border"},{n:"Foreground",c:"bg-foreground"}].map(x=>(
                  <div key={x.n} className="text-center space-y-1"><div className={`h-10 rounded-xl ${x.c}`}/><p className="text-[10px] text-muted-foreground">{x.n}</p></div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={Type} /><div><CardTitle>Typography</CardTitle><CardDescription>Be Vietnam Pro</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-3">
              <div><h1 className="text-4xl font-extrabold tracking-tight">Heading 1</h1><p className="text-xs text-muted-foreground mt-1">text-4xl font-extrabold</p></div>
              <Separator />
              <div><h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2><p className="text-xs text-muted-foreground mt-1">text-3xl font-semibold</p></div>
              <Separator />
              <div><h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3></div>
              <Separator />
              <div><h4 className="text-xl font-medium">Heading 4</h4></div>
              <Separator />
              <div><p className="leading-7">Paragraph bình thường.</p><p className="text-sm text-muted-foreground mt-1">Muted small text</p></div>
            </CardContent>
          </Card>

          {/* Buttons */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={MousePointerClick} /><div><CardTitle>Buttons</CardTitle><CardDescription>Biến thể + trạng thái</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button><Button variant="secondary">Secondary</Button><Button variant="destructive">Destructive</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button>
              </div>
              <Separator />
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button><Button>Default</Button><Button size="lg">Large</Button><Button size="icon"><Plus className="h-4 w-4" /></Button>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Button disabled>Disabled</Button>
                <Button onClick={() => setIsLoading(!isLoading)}>{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{isLoading ? "Loading..." : "Click to Load"}</Button>
                <Button><Mail className="mr-2 h-4 w-4" /> With Icon</Button>
              </div>
            </CardContent>
          </Card>

          {/* Inputs */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={FormInput} /><div><CardTitle>Inputs</CardTitle><CardDescription>Text, Password, Textarea</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full gap-1.5"><Label htmlFor="ds-email">Email</Label><Input type="email" id="ds-email" placeholder="email@example.com" /></div>
              <div className="grid w-full gap-1.5"><Label htmlFor="ds-pw">Password (Disabled)</Label><Input type="password" id="ds-pw" disabled placeholder="Password" /></div>
              <div className="grid w-full gap-1.5"><Label htmlFor="ds-msg">Message</Label><Textarea placeholder="Nhập nội dung..." id="ds-msg" /></div>
            </CardContent>
          </Card>

          {/* Select & Controls */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={FormInput} /><div><CardTitle>Select & Controls</CardTitle><CardDescription>Select, Checkbox, Radio</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2"><Label>Chọn khoá học</Label>
                <Select><SelectTrigger className="w-full"><SelectValue placeholder="Chọn khoá" /></SelectTrigger>
                  <SelectContent><SelectItem value="ai">Khởi đầu với AI</SelectItem><SelectItem value="react">ReactJS Thực chiến</SelectItem><SelectItem value="auto">Tư duy Tự động hoá</SelectItem></SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="flex items-center space-x-2"><Checkbox id="t1" /><Label htmlFor="t1" className="cursor-pointer">Chấp nhận điều khoản</Label></div>
              <div className="flex items-center space-x-2"><Checkbox id="t2" defaultChecked /><Label htmlFor="t2" className="cursor-pointer">Đã checked</Label></div>
              <Separator />
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2"><RadioGroupItem value="default" id="r1" /><Label htmlFor="r1" className="cursor-pointer">Default</Label></div>
                <div className="flex items-center space-x-2"><RadioGroupItem value="comfortable" id="r2" /><Label htmlFor="r2" className="cursor-pointer">Comfortable</Label></div>
                <div className="flex items-center space-x-2"><RadioGroupItem value="compact" id="r3" /><Label htmlFor="r3" className="cursor-pointer">Compact</Label></div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Switch, Slider, Progress, Toggle */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={ToggleLeft} /><div><CardTitle>Switch, Slider, Progress</CardTitle><CardDescription>Toggle controls & indicators</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-5">
              <div className="flex items-center justify-between"><Label htmlFor="sw1" className="cursor-pointer">Nhận thông báo</Label><Switch id="sw1" /></div>
              <div className="flex items-center justify-between"><Label htmlFor="sw2" className="cursor-pointer">Chế độ tối (disabled)</Label><Switch id="sw2" disabled /></div>
              <div className="flex items-center justify-between"><Label htmlFor="sw3" className="cursor-pointer">Đã bật</Label><Switch id="sw3" defaultChecked /></div>
              <Separator />
              <div className="space-y-2"><Label>Progress ({progress}%)</Label><Progress value={progress} /><div className="flex gap-2"><Button size="sm" variant="outline" onClick={()=>setProgress(Math.max(0,progress-10))}>-10</Button><Button size="sm" variant="outline" onClick={()=>setProgress(Math.min(100,progress+10))}>+10</Button></div></div>
              <Separator />
              <div className="space-y-2"><Label>Slider ({sliderVal[0]})</Label><Slider value={sliderVal} onValueChange={(val) => setSliderVal(val as number[])} max={100} step={1} /></div>
              <Separator />
              <div className="flex gap-2">
                <Toggle aria-label="Bold"><Bold className="h-4 w-4" /></Toggle>
                <Toggle aria-label="Italic"><Italic className="h-4 w-4" /></Toggle>
                <Toggle aria-label="Underline"><Underline className="h-4 w-4" /></Toggle>
              </div>
            </CardContent>
          </Card>

          {/* Badges & Avatars */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={CheckCircle2} /><div><CardTitle>Badges & Avatars</CardTitle><CardDescription>Trạng thái và ảnh đại diện</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-5">
              <div className="flex flex-wrap gap-2"><Badge>Default</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="destructive">Destructive</Badge><Badge variant="outline">Outline</Badge><Badge variant="success">Success</Badge></div>
              <Separator />
              <div className="flex gap-3 items-center">
                <Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>CN</AvatarFallback></Avatar>
                <Avatar><AvatarFallback><User className="h-4 w-4" /></AvatarFallback></Avatar>
                <Avatar><AvatarFallback>TC</AvatarFallback></Avatar>
              </div>
            </CardContent>
          </Card>

          {/* Accordion */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={ChevronDown} /><div><CardTitle>Accordion</CardTitle><CardDescription>Collapsible sections</CardDescription></div></div></CardHeader>
            <CardContent>
              <Accordion className="w-full">
                <AccordionItem value="item-1"><AccordionTrigger>Khoá học có gì?</AccordionTrigger><AccordionContent>Khoá học gồm 10 bài học từ cơ bản đến nâng cao về AI.</AccordionContent></AccordionItem>
                <AccordionItem value="item-2"><AccordionTrigger>Thanh toán như nào?</AccordionTrigger><AccordionContent>Chuyển khoản ngân hàng qua SePay, xác nhận tự động.</AccordionContent></AccordionItem>
                <AccordionItem value="item-3"><AccordionTrigger>Có hoàn tiền không?</AccordionTrigger><AccordionContent>Hoàn tiền 100% trong 7 ngày đầu tiên.</AccordionContent></AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Card Demo */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={LayoutGrid} /><div><CardTitle>Card — Khoá học</CardTitle><CardDescription>Demo card thực tế</CardDescription></div></div></CardHeader>
            <CardContent>
              <AspectRatio ratio={16/9} className="bg-muted rounded-xl overflow-hidden flex items-center justify-center"><span className="text-muted-foreground text-sm">16:9 Thumbnail</span></AspectRatio>
              <div className="mt-4 flex items-center justify-between"><span className="font-bold text-lg">1,500,000đ</span><Badge variant="secondary">Workshop</Badge></div>
            </CardContent>
            <CardFooter className="flex justify-between"><Button variant="outline">Xem chi tiết</Button><Button>Đăng ký ngay</Button></CardFooter>
          </Card>

          {/* Tabs & Skeleton */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={Navigation} /><div><CardTitle>Tabs & Skeleton</CardTitle><CardDescription>Navigation + loading</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-5">
              <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-3"><TabsTrigger value="courses">Khoá học</TabsTrigger><TabsTrigger value="workshops">Workshop</TabsTrigger><TabsTrigger value="free">Miễn phí</TabsTrigger></TabsList>
                <TabsContent value="courses" className="p-4 border rounded-xl mt-2"><p className="text-sm text-muted-foreground">Tab 1 — Khoá học content.</p></TabsContent>
                <TabsContent value="workshops" className="p-4 border rounded-xl mt-2"><p className="text-sm text-muted-foreground">Tab 2 — Workshop content.</p></TabsContent>
                <TabsContent value="free" className="p-4 border rounded-xl mt-2"><p className="text-sm text-muted-foreground">Tab 3 — Miễn phí content.</p></TabsContent>
              </Tabs>
              <Separator />
              <div className="flex items-center space-x-4"><Skeleton className="h-12 w-12 rounded-full" /><div className="space-y-2"><Skeleton className="h-4 w-[200px]" /><Skeleton className="h-4 w-[150px]" /></div></div>
              <div className="space-y-2"><Skeleton className="h-4 w-full" /><Skeleton className="h-4 w-3/4" /><Skeleton className="h-20 w-full rounded-xl" /></div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={SlidersHorizontal} /><div><CardTitle>Card — Stats</CardTitle><CardDescription>Admin dashboard</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-4 rounded-xl border p-4"><User className="h-5 w-5" /><div><p className="text-sm font-medium">Học viên mới</p><p className="text-sm text-muted-foreground">+12 hôm nay</p></div></div>
              <div className="flex items-center space-x-4 rounded-xl border p-4"><Plus className="h-5 w-5" /><div><p className="text-sm font-medium">Doanh thu</p><p className="text-sm text-muted-foreground">15,000,000đ</p></div></div>
            </CardContent>
          </Card>

          {/* Separator & Spacing */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={LayoutGrid} /><div><CardTitle>Separator & Spacing</CardTitle><CardDescription>Đường phân cách</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-4">
              <div><p className="text-sm">Nội dung phía trên</p></div><Separator /><div><p className="text-sm">Nội dung phía dưới</p></div><Separator />
              <div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div>
            </CardContent>
          </Card>

          {/* Table — full width */}
          <section className="lg:col-span-2 xl:col-span-3">
            <Card>
              <CardHeader><div className="flex items-center gap-3"><SI icon={LayoutGrid} /><div><CardTitle>Table — Giao dịch</CardTitle><CardDescription>Danh sách giao dịch gần đây</CardDescription></div></div></CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>Danh sách giao dịch gần đây.</TableCaption>
                  <TableHeader><TableRow><TableHead className="w-[100px]">Mã GD</TableHead><TableHead>Trạng thái</TableHead><TableHead>Khoá học</TableHead><TableHead>Học viên</TableHead><TableHead className="text-right">Số tiền</TableHead></TableRow></TableHeader>
                  <TableBody>
                    <TableRow><TableCell className="font-medium">INV001</TableCell><TableCell><Badge variant="success">Paid</Badge></TableCell><TableCell>Khởi đầu với AI</TableCell><TableCell>Nguyễn Văn A</TableCell><TableCell className="text-right">2,500,000đ</TableCell></TableRow>
                    <TableRow><TableCell className="font-medium">INV002</TableCell><TableCell><Badge variant="outline">Pending</Badge></TableCell><TableCell>ReactJS Thực chiến</TableCell><TableCell>Trần Thị B</TableCell><TableCell className="text-right">1,500,000đ</TableCell></TableRow>
                    <TableRow><TableCell className="font-medium">INV003</TableCell><TableCell><Badge variant="success">Paid</Badge></TableCell><TableCell>Workshop Tự động hoá</TableCell><TableCell>Lê Hoàng C</TableCell><TableCell className="text-right">500,000đ</TableCell></TableRow>
                    <TableRow><TableCell className="font-medium">INV004</TableCell><TableCell><Badge variant="destructive">Failed</Badge></TableCell><TableCell>Khởi đầu với AI</TableCell><TableCell>Phạm Đức D</TableCell><TableCell className="text-right">2,500,000đ</TableCell></TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Overlays */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={Layers} /><div><CardTitle>Overlays</CardTitle><CardDescription>Dialog, Alert, Sheet, Dropdown</CardDescription></div></div></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Dialog>
                  <DialogTrigger render={<Button variant="outline">Mở Dialog</Button>} />
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader><DialogTitle>Sửa bài học</DialogTitle><DialogDescription>Thay đổi thông tin tại đây.</DialogDescription></DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4"><Label htmlFor="dlg-name" className="text-right">Tên</Label><Input id="dlg-name" defaultValue="Bài 1: Cài đặt" className="col-span-3" /></div>
                    </div>
                    <DialogFooter><Button type="submit">Lưu thay đổi</Button></DialogFooter>
                  </DialogContent>
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger render={<Button variant="destructive">Alert Dialog</Button>} />
                  <AlertDialogContent>
                    <AlertDialogHeader><AlertDialogTitle>Xác nhận xoá?</AlertDialogTitle><AlertDialogDescription>Hành động này không thể hoàn tác.</AlertDialogDescription></AlertDialogHeader>
                    <AlertDialogFooter><AlertDialogCancel>Huỷ</AlertDialogCancel><AlertDialogAction>Xoá</AlertDialogAction></AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <Separator />
              <div className="flex flex-wrap gap-2">
                <Sheet>
                  <SheetTrigger render={<Button variant="outline">Sheet</Button>} />
                  <SheetContent>
                    <SheetHeader><SheetTitle>Menu Điều hướng</SheetTitle><SheetDescription>Mobile sidebar menu.</SheetDescription></SheetHeader>
                    <div className="px-4 pb-4">
                      <ScrollArea className="h-[250px] w-full rounded-xl border p-4">
                        {Array.from({ length: 15 }).map((_, i) => (<div key={i} className="text-sm py-2 px-2 rounded-lg hover:bg-accent cursor-pointer">Mục menu {i + 1}</div>))}
                      </ScrollArea>
                    </div>
                  </SheetContent>
                </Sheet>
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="outline">User Menu ▾</Button>} />
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    <DropdownMenuItem>Khoá học đã đăng ký</DropdownMenuItem>
                    <DropdownMenuItem>Cài đặt</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">Đăng xuất</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardContent>
          </Card>

          {/* Toast */}
          <Card>
            <CardHeader><div className="flex items-center gap-3"><SI icon={Info} /><div><CardTitle>Toast / Sonner</CardTitle><CardDescription>Notification toasts</CardDescription></div></div></CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => toast("Mặc định", { description: "Nội dung toast." })}>Default</Button>
                <Button variant="outline" onClick={() => toast.success("Thành công!", { description: "Đã đăng ký khoá học." })}>Success</Button>
                <Button variant="outline" onClick={() => toast.error("Lỗi!", { description: "Vui lòng thử lại." })}>Error</Button>
                <Button variant="outline" onClick={() => toast.warning("Cảnh báo!", { description: "Phiên sắp hết hạn." })}>Warning</Button>
                <Button variant="outline" onClick={() => toast.info("Thông tin", { description: "Có cập nhật mới." })}>Info</Button>
                <Button variant="outline" onClick={() => toast("Có action", { action: { label: "Xác nhận", onClick: () => {} } })}>Action</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
