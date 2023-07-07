import type { Meta, StoryObj } from '@storybook/react';

import WysiwygOutlined from '../../lib/action/WysiwygOutlined';

const meta: Meta<typeof WysiwygOutlined> = {
  component: WysiwygOutlined,
  tags: ['autodocs'],
  title: 'action/WysiwygOutlined',
};

export default meta;
type Story = StoryObj<typeof WysiwygOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
