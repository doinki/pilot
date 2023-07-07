import type { Meta, StoryObj } from '@storybook/react';

import FormatUnderlinedOutlined from '../../lib/editor/FormatUnderlinedOutlined';

const meta: Meta<typeof FormatUnderlinedOutlined> = {
  component: FormatUnderlinedOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatUnderlinedOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatUnderlinedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
