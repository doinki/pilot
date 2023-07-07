import type { Meta, StoryObj } from '@storybook/react';

import PortraitOutlined from '../../lib/image/PortraitOutlined';

const meta: Meta<typeof PortraitOutlined> = {
  component: PortraitOutlined,
  tags: ['autodocs'],
  title: 'image/PortraitOutlined',
};

export default meta;
type Story = StoryObj<typeof PortraitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
