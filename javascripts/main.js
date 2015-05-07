$(this).effect("bounce", { times:5 }, 1000);
     });
+        switch(parseInt(key.which,10)) {
+            case 65:
+                $('#guy').animate({left: "-=50px"}, 'fast');
+                break;
+            case 83:
+                $('#guy').animate({top: "+=10px"}, 'fast');
+                break;
+            case 87:
+                $('#guy').animate({top: "-=10px"}, 'fast');
+                break;
+            case 68:
+                $('#guy').animate({left: "+=50px"}, 'fast');
+                break;
+            default:
+                break;
+        }
+    });
 });
 
