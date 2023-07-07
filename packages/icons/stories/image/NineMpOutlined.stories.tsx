import type { Meta, StoryObj } from '@storybook/react';

import NineMpOutlined from '../../lib/image/NineMpOutlined';

const meta: Meta<typeof NineMpOutlined> = {
  component: NineMpOutlined,
  tags: ['autodocs'],
  title: 'image/NineMpOutlined',
};

export default meta;
type Story = StoryObj<typeof NineMpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
