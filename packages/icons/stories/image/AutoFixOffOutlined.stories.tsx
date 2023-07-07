import type { Meta, StoryObj } from '@storybook/react';

import AutoFixOffOutlined from '../../lib/image/AutoFixOffOutlined';

const meta: Meta<typeof AutoFixOffOutlined> = {
  component: AutoFixOffOutlined,
  tags: ['autodocs'],
  title: 'image/AutoFixOffOutlined',
};

export default meta;
type Story = StoryObj<typeof AutoFixOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
