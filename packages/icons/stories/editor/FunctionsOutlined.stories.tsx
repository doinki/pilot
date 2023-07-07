import type { Meta, StoryObj } from '@storybook/react';

import FunctionsOutlined from '../../lib/editor/FunctionsOutlined';

const meta: Meta<typeof FunctionsOutlined> = {
  component: FunctionsOutlined,
  tags: ['autodocs'],
  title: 'editor/FunctionsOutlined',
};

export default meta;
type Story = StoryObj<typeof FunctionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
