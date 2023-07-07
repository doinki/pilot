import type { Meta, StoryObj } from '@storybook/react';

import ZoomInOutlined from '../../lib/action/ZoomInOutlined';

const meta: Meta<typeof ZoomInOutlined> = {
  component: ZoomInOutlined,
  tags: ['autodocs'],
  title: 'action/ZoomInOutlined',
};

export default meta;
type Story = StoryObj<typeof ZoomInOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
