import type { Meta, StoryObj } from '@storybook/react';

import RawOnOutlined from '../../lib/image/RawOnOutlined';

const meta: Meta<typeof RawOnOutlined> = {
  component: RawOnOutlined,
  tags: ['autodocs'],
  title: 'image/RawOnOutlined',
};

export default meta;
type Story = StoryObj<typeof RawOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
