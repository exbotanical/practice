CC ?= gcc
CFLAGS :=
TARGET := run

%: %.c
	$(CC) $(CFLAGS) -o $(TARGET) $<

clean:
	rm $(TARGET)

.PHONY: clean
