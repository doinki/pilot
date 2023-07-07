import type { Meta, StoryObj } from '@storybook/react';

import FormatTextdirectionLToROutlined from '../../lib/editor/FormatTextdirectionLToROutlined';

const meta: Meta<typeof FormatTextdirectionLToROutlined> = {
  component: FormatTextdirectionLToROutlined,
  tags: ['autodocs'],
  title: 'editor/FormatTextdirectionLToROutlined',
};

export default meta;
type Story = StoryObj<typeof FormatTextdirectionLToROutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
