"use client";

import MDEditor from "@uiw/react-md-editor";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

// import { createComment } from "@/lib/actions/guestbook";

import { toast } from "react-toastify";
import { guestbookSchema } from "@/lib/guestbookSchema";

const EntryForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleFormSubmit = async (previousState: any, formData: FormData) => {
    try {
      const formValues = { message };

      // Validate with Zod
      await guestbookSchema.parseAsync(formValues);

      // Call server action
    //   const result = await createComment(previousState, { message });

      if (result.status === "SUCCESS") {
        toast.success("Your message was added!");
        setMessage(""); // Reset editor
        router.refresh();
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as any);

        toast.error("Please write a valid message.");
        return { status: "ERROR" };
      }

      toast.error("Unexpected error occurred.");
      return { status: "ERROR" };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    status: "INITIAL",
  });

  return (
    <Card className="mx-auto mb-12 w-full max-w-2xl rounded-3xl">
      <CardContent>
        <form action={formAction} className="space-y-6">
          {/* Comment Field */}
          <div className="space-y-2" data-color-mode="dark">
            <Label>Your Comment</Label>

            <MDEditor
              value={message}
              onChange={(v) => setMessage(v || "")}
              preview="edit"
              height={250}
              textareaProps={{
                placeholder: "Write your message here...",
              }}
            />

            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Posting..." : "Post Comment"}
            <Send className="ml-2 size-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EntryForm;
