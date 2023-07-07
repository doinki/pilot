import type { Meta, StoryObj } from '@storybook/react';

import FormatTextdirectionRToLOutlined from '../../lib/editor/FormatTextdirectionRToLOutlined';

const meta: Meta<typeof FormatTextdirectionRToLOutlined> = {
  component: FormatTextdirectionRToLOutlined,
  tags: ['autodocs'],
  title: 'editor/FormatTextdirectionRToLOutlined',
};

export default meta;
type Story = StoryObj<typeof FormatTextdirectionRToLOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
