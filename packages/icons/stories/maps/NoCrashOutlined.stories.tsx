import type { Meta, StoryObj } from '@storybook/react';

import NoCrashOutlined from '../../lib/maps/NoCrashOutlined';

const meta: Meta<typeof NoCrashOutlined> = {
  component: NoCrashOutlined,
  tags: ['autodocs'],
  title: 'maps/NoCrashOutlined',
};

export default meta;
type Story = StoryObj<typeof NoCrashOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
