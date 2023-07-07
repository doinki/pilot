import type { Meta, StoryObj } from '@storybook/react';

import ZoomOutOutlined from '../../lib/action/ZoomOutOutlined';

const meta: Meta<typeof ZoomOutOutlined> = {
  component: ZoomOutOutlined,
  tags: ['autodocs'],
  title: 'action/ZoomOutOutlined',
};

export default meta;
type Story = StoryObj<typeof ZoomOutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
