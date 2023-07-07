import type { Meta, StoryObj } from '@storybook/react';

import TextFormatOutlined from '../../lib/content/TextFormatOutlined';

const meta: Meta<typeof TextFormatOutlined> = {
  component: TextFormatOutlined,
  tags: ['autodocs'],
  title: 'content/TextFormatOutlined',
};

export default meta;
type Story = StoryObj<typeof TextFormatOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
