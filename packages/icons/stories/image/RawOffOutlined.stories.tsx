import type { Meta, StoryObj } from '@storybook/react';

import RawOffOutlined from '../../lib/image/RawOffOutlined';

const meta: Meta<typeof RawOffOutlined> = {
  component: RawOffOutlined,
  tags: ['autodocs'],
  title: 'image/RawOffOutlined',
};

export default meta;
type Story = StoryObj<typeof RawOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
