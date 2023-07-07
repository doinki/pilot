import type { Meta, StoryObj } from '@storybook/react';

import EuroOutlined from '../../lib/image/EuroOutlined';

const meta: Meta<typeof EuroOutlined> = {
  component: EuroOutlined,
  tags: ['autodocs'],
  title: 'image/EuroOutlined',
};

export default meta;
type Story = StoryObj<typeof EuroOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
