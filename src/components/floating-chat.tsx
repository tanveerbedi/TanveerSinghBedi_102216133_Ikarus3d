'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Bot, X } from 'lucide-react';
import { ChatRecommendations } from './chat-recommendations';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg btn-cta animate-pulse"
              size="icon"
              onClick={() => setIsOpen(true)}
            >
              <Bot className="h-7 w-7" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Need help choosing?</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="p-0 border-0 max-w-md h-[70vh] flex flex-col gap-0 rounded-xl overflow-hidden shadow-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>AI Assistant</DialogTitle>
            <DialogDescription>
              Chat with our AI assistant to get furniture recommendations.
            </DialogDescription>
          </DialogHeader>
          <ChatRecommendations />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 rounded-full h-7 w-7 bg-black/20 text-white hover:bg-black/40"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
