import type { Meta, StoryObj } from '@storybook/react';

import HdrOffOutlined from '../../lib/image/HdrOffOutlined';

const meta: Meta<typeof HdrOffOutlined> = {
  component: HdrOffOutlined,
  tags: ['autodocs'],
  title: 'image/HdrOffOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
