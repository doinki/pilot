import type { Meta, StoryObj } from '@storybook/react';

import FormatBoldOutlined from '../../lib/editor/FormatBoldOutlined';

const meta: Meta<typeof FormatBoldOutlined> = {
  component: FormatBoldOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatBoldOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatBoldOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
