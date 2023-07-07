import type { Meta, StoryObj } from '@storybook/react';

import PreviewOutlined from '../../lib/action/PreviewOutlined';

const meta: Meta<typeof PreviewOutlined> = {
  component: PreviewOutlined,
  tags: ['autodocs'],
  title: 'action/PreviewOutlined',
};

export default meta;
type Story = StoryObj<typeof PreviewOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
