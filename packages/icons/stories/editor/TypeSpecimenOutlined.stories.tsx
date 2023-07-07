import type { Meta, StoryObj } from '@storybook/react';

import TypeSpecimenOutlined from '../../lib/editor/TypeSpecimenOutlined';

const meta: Meta<typeof TypeSpecimenOutlined> = {
  component: TypeSpecimenOutlined,
  tags: ['autodocs'],
  title: 'editor/TypeSpecimenOutlined',
};

export default meta;
type Story = StoryObj<typeof TypeSpecimenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
