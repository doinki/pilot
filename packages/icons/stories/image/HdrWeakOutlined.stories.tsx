import type { Meta, StoryObj } from '@storybook/react';

import HdrWeakOutlined from '../../lib/image/HdrWeakOutlined';

const meta: Meta<typeof HdrWeakOutlined> = {
  component: HdrWeakOutlined,
  tags: ['autodocs'],
  title: 'image/HdrWeakOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrWeakOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
