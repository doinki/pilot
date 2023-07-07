import type { Meta, StoryObj } from '@storybook/react';

import TextFieldsOutlined from '../../lib/editor/TextFieldsOutlined';

const meta: Meta<typeof TextFieldsOutlined> = {
  component: TextFieldsOutlined,
  tags: ['autodocs'],
  title: 'editor/TextFieldsOutlined',
};

export default meta;
type Story = StoryObj<typeof TextFieldsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
